interface ITProduct{
    id_product  : number;
    id_cat      : number;
    cod_product : string;
    nom_product : string;
    pre_uni     : number;
    modelo      : string;
    marca       : string;
    rating      : number;
    stock       : number;
    peso        : number;
    tipo        : number;
    despro      : string;
    /*
    esta propiedad cuenta con su propia api ya que
    es de tipo blob -> ver la clase ProductItemModel
    imgpro      : string;
    */
    nomven      : string;
}

export default ITProduct;