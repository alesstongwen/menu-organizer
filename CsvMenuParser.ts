import { readFile } from "node:fs/promises";
import { MenuItem } from "./MenuItem";
import { EOL } from "os";

export class Menu {
  items: MenuItem[] = [];

  addItem(item: MenuItem) {
    this.items.push(item);
  }
}
export class CsvMenuParser {
  static async parse(filePath: string): Promise<Menu> {
    const data = await readFile(filePath, "utf8");
    const menu = new Menu();
    const lines = data.trim().split(EOL);

    for (const line of lines) {
      const [category, name, description, price] = line.split(",");
      menu.addItem(new MenuItem(category, name, description, price));
    }
    return menu;
  }
}
