export interface IList<T> {

    registro : T[];

    get(termoBusca?: string): void;
    delete(id: number): void;
}
