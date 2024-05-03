import * as Yup from "yup";

export const vale=Yup.object({
    PolicyNo:Yup.string().min(8).max(10).required('value must of of alteast 8 letters'),
    AGE:Yup.number().required('Number format'),
    Police_avail:Yup.string().min(2).max(3),
    Summary:Yup.string().min(30).required('atleast 30 char'),
    select_car:Yup.string().max(10).required('select type of car'),
})