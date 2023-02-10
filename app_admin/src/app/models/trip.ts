// this represents the model that is coming from the data api endpoint

export interface Trip {
    _id: string, // internal MongoDB primary key
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string
   }
   