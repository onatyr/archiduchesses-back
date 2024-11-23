import { ApiService } from '../../../shared/services/api.service';
import dotenv from 'dotenv';
import path from 'path';
import { plantNetAxiosInstance } from '../../index';

dotenv.config({
    path: path.resolve(__dirname, '../../../../.env'),
});

export class PlantNetService extends ApiService {
    private identificationParams = {
        'api-key': `${process.env.PLANTNET_API_KEY}`,
        'include-related-images': 'false',
        'no-reject': 'false',
        'nb-results': '10',
        'lang': 'en',
    };

    constructor() {
        super(plantNetAxiosInstance, 'https://my-api.plantnet.org/v2');
        plantNetAxiosInstance.defaults.headers.common["Content-Type"] = "multipart/form-data";
    }

    async identifyPlant(image: Express.Multer.File | null = null) {
        console.log(this.identificationParams)
        return this._post(
            '/identify/all',
            this.identificationParams,
            new URLSearchParams(this.identificationParams),
            null
        )
            .then((response) => {
                // console.log(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
