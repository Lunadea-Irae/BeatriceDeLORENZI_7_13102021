export interface Form {
    label:string;
    type:string;
    id:string;
    value?:unknown;
    required?:boolean;
    accept?:string;
}
