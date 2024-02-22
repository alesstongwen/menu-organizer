import { MenuItem } from "./MenuItem";
import { EOL } from "os";
import { writeFile } from "node:fs/promises";
export class TextWriter {
  private static formatMenuItems(menuItems: MenuItem[]): string {
    const groupedItems: { [key: string]: MenuItem[] } = {};

    for (const item of menuItems) {
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
      }
      groupedItems[item.category].push(item);
    }

    let formattedMenu = "";

    for (const [category, items] of Object.entries(groupedItems)) {
      formattedMenu += `* ${category} Items *\n`;
      for (const item of items) {
        formattedMenu += `$${item.price}\t${item.name}, ${item.description}\n`;
      }
      formattedMenu += EOL;
    }

    return formattedMenu;
  }

  public static async writeFormattedMenuToFile(
    menuItems: MenuItem[],
    filePath: string
  ): Promise<void> {
    const formattedMenu = this.formatMenuItems(menuItems);
    await writeFile(filePath, formattedMenu, "utf8");
  }
}
