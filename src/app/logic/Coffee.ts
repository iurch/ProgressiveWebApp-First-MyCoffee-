import { PlaceLocation } from "app/logic/PlaceLocation";
import { TastingRating } from "app/logic/TastingRating";

export  class Coffee {

        // Properties
        _id: string
        type: string
        rating: number 
        notes: string
        tastingRating: TastingRating

        constructor(public  name: string  = '', 
                        public place: string = '', 
                        public location: PlaceLocation = null) {
                                this.location = new PlaceLocation()
                                this.tastingRating = new TastingRating()
        }


}