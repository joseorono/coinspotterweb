import axios, { AxiosResponse } from 'axios';
import { Address } from 'viem';
// Every Service is a singleton
class gMapsService {
  private static instance: gMapsService;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): gMapsService {
      if (!gMapsService.instance) {
          gMapsService.instance = new gMapsService();
      }

      return gMapsService.instance;
  }

  /**
   * ========================================================
   * FUNCTIONS
   * ========================================================
   */

  static async getMap(address: string): Promise<void> {
    try {
      const response: AxiosResponse<any> = await axios.get(
        'https://maps.googleapis.com/maps/api/staticmap',
        {
          params: {
            center: address,
            size: '400x300',
            key: process.env.CS_GMAPS_API_KEY,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  static async handleFindPlace(address: string): Promise<string> {
      let placeId = '';
      const response: AxiosResponse<any> = await axios.post(
        'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
        {
          input: address,
          inputtype: 'textquery',
          fields: 'place_id',
          key: process.env.CS_GMAPS_API_KEY,
        }
      );

      if (response.data.candidates.length > 0) {
        placeId = response.data.candidates[0].place_id;
      }

      return placeId;

  };


  
}

export default gMapsService;
