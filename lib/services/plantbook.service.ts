import { ApiService } from './api.service';
import { PlantBookDetails, PlantbookEntity } from '../models';
import axios from 'axios';

export const plantBookAxiosInstance = axios.create();

export class PlantBookService extends ApiService {
  constructor(apiToken: string | undefined) {
    super(plantBookAxiosInstance, 'https://open.plantbook.io/api/v1');
    plantBookAxiosInstance.defaults.headers.common['Authorization'] =
     `Token ${apiToken}`;
  }

  async searchPlantByName(search: string): Promise<PlantbookEntity[]> {
    return this._get(`/plant/search`, {
      alias: search,
      limit: 10,
      offset: 0,
    })
     .then(
      (response: {
        data: { results: { display_pid: string; pid: string }[] };
      }) => {
        return response.data.results.map((plantEntity) => ({
          pid: plantEntity.pid,
          displayPid: plantEntity.display_pid,
        }));
      }
     )
     .catch((e) => {
       console.error(e);
       return [];
     });
  }

  async getPlantDetails(pid: string): Promise<PlantBookDetails | null> {
    return this._get(`/plant/detail/${pid}`)
     .then((response) => {
       return {
         pid: response.data.pid,
         displayPid: response.data.display_pid,
         maxLightLux: response.data.max_light_lux,
         minLightLux: response.data.min_light_lux,
         maxSoilMoist: response.data.max_soil_moist,
         minSoilMoist: response.data.min_soil_moist,
         imageUrl: response.data.image_url,
       };
     })
     .catch((e) => {
       console.error(e);
       return null;
     });
  }
}
