interface UserInfo {
  userId: number
  id: number
  title: string
  body: string
}

interface GetUserResponse {
  Infos: ReadonlyArray<UserInfo>
}

export { UserInfo, GetUserResponse }
