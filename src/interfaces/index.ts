export interface FormType{
    title:string
    year:string
    director:string
    genre:string
    description:string
}
export interface MovieType{
    title:string
    year:string
    director:string
    genre:string
    description:string,
    id:number
}
export interface Initial{
    form:FormType
    newData:boolean
    editId:number
    isEdit:boolean
    data:MovieType[]
    firstData:MovieType[]
}
export interface PayloadType extends Initial{
    key?:string
    value?:string
}
export interface ContextType {
    state:Initial
    dispatch: (x: { payload: { value?: string; key?: string }; type: string })=>void
}

export interface ActionType{
    type:string
    payload:PayloadType
}

export interface Errors {
    title?: string
    year?: string
    genre?: string
    director?: string
    description?:string
}