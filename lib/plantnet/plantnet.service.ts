import dotenv from 'dotenv';
import path from 'path';
import { ApiService } from '@lib/services';
import { plantNetAxiosInstance } from '@api/index';
import { PlantNetIdentification } from '@lib/models';

dotenv.config({
  path: path.resolve(__dirname, '../../../../.env'),
});

export class PlantNetService extends ApiService {
  private identificationParams = {
    'api-key': `${process.env.PLANTNET_API_KEY}`,
    'include-related-images': 'false',
    'no-reject': 'false',
    'nb-results': '10',
    lang: 'en',
  };

  constructor() {
    super(plantNetAxiosInstance, 'https://my-api.plantnet.org/v2');
    plantNetAxiosInstance.defaults.headers.common['Content-Type'] =
      'multipart/form-data';
  }

  async identifyPlant(images: FormData): Promise<PlantNetIdentification[]> {
    return this._post(
      '/identify/all',
      null,
      new URLSearchParams(this.identificationParams),
      images
    )
      .then((response) => {
        return response.data.results
          .map(
            (result: {
              species: {
                scientificNameWithoutAuthor: string;
                genus: { scientificNameWithoutAuthor: string };
              };
              score: string;
            }) => ({
              plantnetName: result.species.scientificNameWithoutAuthor,
              plantnetGenus: result.species.genus.scientificNameWithoutAuthor,
              score: result.score,
            })
          )
          .sort(
            (a: { score: string }, b: { score: string }) =>
              Number(a.score) > Number(b.score)
          );
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
