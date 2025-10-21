const form = document.getElementById("form");

form.addEventListener("submit", calculateTip);

function calculateTip(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  const rachunek = data.get("rachunek");
  const napiwek = data.get("napiwek");

  const wynik = document.getElementById("wynik");

  const liczba1 = parseFloat(rachunek);
  const liczba2 = parseFloat(napiwek);

  const procentNapiwku = liczba2 / 100;
  const kwotanapiwku = liczba1 * procentNapiwku;

  const calkwota = liczba1 + kwotanapiwku;

  wynik.innerText = `Kwota napiwku: ${kwotanapiwku.toFixed(
    2
  )}, całkowita kwota: ${calkwota.toFixed(2)} `;
}
