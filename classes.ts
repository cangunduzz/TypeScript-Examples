class Ev {
  private _odaSayisi: number;
  _pencereSayisi: number;
  _kat: number;
  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this._odaSayisi = odaSayisi;
    this._kat = kat;
    this._pencereSayisi = pencereSayisi;
  }
  yemekYe() {
    console.log(this._kat + ". Katlı evde " + "yemek yiyildi");
  }
}

let ev = new Ev(3, 4, 5);

ev.yemekYe();
console.log(ev._kat);

class Kisi {
  private _isim: string;
  get isim(): string {
    return "Sayın " + this._isim;
  }
  set isim(ad: string) {
    this._isim = ad;
  }
  kaydet() {
    console.log("Birey Kaydedildi");
  }
}

class Musteri extends Kisi {
  satisYap() {
    console.log("Satış Yapıldı");
  }
}

class Personel extends Kisi {
  maasOde() {
    console.log("Maaş ödendi");
  }
}
let musteri = new Musteri();
musteri.isim = "Engin";
console.log(musteri.isim);
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();
