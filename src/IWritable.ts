export interface IWritable {
  write(
    menu: Record<string, { name: string; quantity: string; price: number }[]>
  ): Promise<void>;
}
