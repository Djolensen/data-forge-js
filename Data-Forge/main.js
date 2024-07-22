const dataForge = require("data-forge");
require("data-forge-fs");

const df = dataForge.readFileSync("data/iris.csv").parseCSV();

const prikazFajla = (data) => {
  console.log(data.toArray());
  console.log(data.toString());
};

const prvihPetRedova = (data) => {
  console.log(data.head(5).toString());
};

const poslednjihPetRedova = (data) => {
  console.log(data.tail(5).toString());
};

const pronadjiSveTipove = (data) => {
  console.log(data.detectTypes().toString());
};

const pronadjiBrojeve = (data) => {
  console.log(data.detectValues().toString());
};

const pronadjiImenaKolona = (data) => {
  console.log(data.getColumnNames());
};

const izborReda = (data) => {
  console.log(data.at(10));
};

const citanjeViseRedova = (data) => {
  console.log(data.between(10, 20).toString());
};

const odakleDokle = (data) => {
  console.log(data.skip(10).take(20).toString());
};

const uzmiKolonu = (data) => {
  console.log(data.getSeries("variety").toString());
};

const vratiKolonu2 = (data) => {
  let colVariety = data.deflate((row) => row.variety);
  console.log(colVariety.toString());
};

const viseKolona = (data) => {
  console.log(data.subset(["sepal.length", "variety"]).toString());
};

const brisanjeKolone = (data) => {
  console.log(data.dropSeries("variety").toString());
};

const brisanjeViseKolona = (data) => {
  console.log(data.dropSeries(["variety", "petal.width"]).toString());
};

const filter = (data) => {
  console.log(data.where((row) => row["sepal.width"] > 1.3).toString());
};

const transformacija = (data) => {
  console.log(
    data.transformSeries({ variety: (value) => value.toUpperCase() }).toString()
  );
};

const izdvoj = (data) => {
  console.log(data.distinct((row) => row.variety).toString());
};

const prikaziSveMetode = () => {
  console.dir(dataForge);
};

const kompleksna = (data) => {
  let pyHeight = data.getSeries("sepal.length");
  let promenljiva = pyHeight.select((value) => value + 2.5);
  console.log(data.withSeries("sepal.lenght", promenljiva).toString());
};

const brojPojavljivanjaVrednosti = (data) => {
  let varietyGroups = data
    .groupBy((row) => row.variety)
    .select((group) => {
      return {
        variety: group.first().variety,
        Count: group.count(),
      };
    });
  console.log(varietyGroups.toArray());
};

brojPojavljivanjaVrednosti(df);
kompleksna(df);
prikaziSveMetode(df);
filter(df);
