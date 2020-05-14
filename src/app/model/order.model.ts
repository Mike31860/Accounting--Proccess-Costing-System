export class Order {
  id: string;
  manoDeObra: number;
  materialDirecto: number;
  cif: number;
  totalCostoOrder: number;
  baseAsignacion: number;
  tasaCifAplicados: number;
  tasa: number;
  date: Date;

  constructor() {
    this.manoDeObra = 0;
    this.materialDirecto = 0;
    this.cif = 0;
    this.totalCostoOrder = this.manoDeObra+this.cif+ this.materialDirecto;
    this.baseAsignacion=0;
    this.tasaCifAplicados=0;
    this.tasa = 0;
  }
}
