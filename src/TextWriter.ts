import { EOL } from "os";
import { writeFile } from "node:fs/promises";
import { IWritable } from "./IWritable";

export class TextWriter implements IWritable {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  async write(
    data: Record<string, { name: string; quantity: string; price: number }[]>
  ): Promise<void> {
    let content = "";
    for (const [type, items] of Object.entries(data)) {
      content += `* ${type} Items *\n`;
      items.forEach((item) => {
        content += `$${item.price.toFixed(2)}\t${item.name}, ${
          item.quantity
        }\n`;
      });
      content += EOL;
    }

    await writeFile(this.fileName, content);
  }
}
