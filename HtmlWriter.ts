import { MenuItem } from "./MenuItem";
import { IWritable } from "./app";

export class HtmlWriter implements IWritable {
  write(menu: MenuItem[]): string {
    const groupedItems: { [category: string]: MenuItem[] } = {};
    for (const item of menu) {
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
      }
      groupedItems[item.category].push(item);
    }
    let html = "<!DOCTYPE html><html><head></head><body><h1>Menu</h1>";

    for (const [category, items] of Object.entries(groupedItems)) {
      html += `<h2>${category} Items</h2>`;
      html += "<table><tr><th>Name</th><th>Description</th><th>Price</th></tr>";

      for (const item of items) {
        html += `<tr><td>${item.name}</td><td>${item.description}</td><td>${item.price}</td></tr>`;
      }
      html += "</table>";
    }
    html += "</body></html>";
    return html;
  }
}
