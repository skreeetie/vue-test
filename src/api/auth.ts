interface Data {
  name: string;
  email: string;
  password: string;
}

export const register = (data: Data) => {
  return new Promise((res) => {
    setTimeout(() => res({success: true, user: data}), 1000)
  })
}