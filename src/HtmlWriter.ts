import { IWritable } from "./IWritable";
import { writeFile } from "node:fs/promises";

export class HtmlWriter implements IWritable {
  fileName: string;
  constructor(filename: string) {
    this.fileName = filename;
  }
  async write(
    menu: Record<string, { name: string; quantity: string; price: number }[]>
  ): Promise<void> {
    let content =
      "<!DOCTYPE html><html><head><title>Menu</title></head><body><table>";
    for (const [type, items] of Object.entries(menu)) {
      content += `<tr>${type} Items</th></tr>`;
      items.forEach((item) => {
        content += `<tr><td>$${item.price.toFixed(2)}</td><td>${
          item.name
        }</td><td>${item.quantity}</td></tr>`;
      });
    }
    content += "</table></body></html>";

    await writeFile(this.fileName, content);
  }
}
