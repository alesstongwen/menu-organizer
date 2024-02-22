import { MenuItem } from "./MenuItem";
import { CsvMenuParser, Menu } from "./CsvMenuParser";
import { HtmlWriter } from "./HtmlWriter";
import { TextWriter } from "./TextWriter";

export interface IWritable {
  write(menu: MenuItem[]): string;
}
