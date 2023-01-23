const getInputs = () => {
  let firstNameInput = document.querySelector('#firstname');
  let lastNameInput = document.querySelector('#lastname');
  let cityInput = document.querySelector('#city');
  let countryInput = document.querySelector('#country');

  return {
    firstname: firstNameInput.value,
    lastname: lastNameInput.value,
    city: cityInput.value,
    country: countryInput.value,
  };
};

const add = (bottom = true) => {
  const inputs = getInputs();

  if (!inputs.firstname && !inputs.lastname && !inputs.city && !inputs.country)
    return;

  let tableData = `
    <tr>
        <td></td>
        <td>${inputs.firstname}</td>
        <td>${inputs.lastname}</td>
        <td>${inputs.city}</td>
        <td>${inputs.country}</td>
    </tr>
    `;

  let table = document.querySelector('table');

  table.innerHTML = bottom
    ? table.innerHTML + tableData
    : tableData + table.innerHTML;
};
