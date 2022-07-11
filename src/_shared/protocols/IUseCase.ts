export interface IUseCase<PARAMS, RETURN_TYPE> {
  execute(data: PARAMS): Promise<RETURN_TYPE>;
}
