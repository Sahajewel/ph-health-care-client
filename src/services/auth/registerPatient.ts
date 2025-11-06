/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function registerPatient(_currentSate: any, formData: any) {
  try {
    const registerData = {
      password: formData.get("password"),
      patient: {
        name: formData.get("name"),
        contactNumber: formData.get("contactNumber"),
        email: formData.get("email"),
        address: formData.get("address"),
      },
    };
    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));
    const res = await fetch(
      "http://localhost:5000/api/v1/user/create-patient",
      {
        method: "POST",
        body: newFormData,
      }
    ).then((res) => res.json());
    return res;
  } catch (error) {
    console.log(error);
    return { error: "Register Failed" };
  }
}
