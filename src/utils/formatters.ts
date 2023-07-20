export const dateFormatter = (params: { value: string | number | Date }) => {
  const dateObj = new Date(params.value);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = String(dateObj.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};

export const hazardousAnswerFormatter = (params: { value: string }) => {
  if (params.value === "Y") {
    return "Yes";
  } else if (params.value === "N") {
    return "No";
  } else if (params.value === "n/a") {
    return "";
  } else {
    return params.value;
  }
};
