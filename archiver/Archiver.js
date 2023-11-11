const fs = require("fs");

/**
 * @class Archiver
 * Classe permettant d'instancier une nouvelle archive
 */
class Archiver {
  /**
   * Crée une instance de la classe Archiver.
   * @param {string} filePath - Le chemin du fichier de stockage de l'archive (sans l'extension .txt).
   * @throws {Error} Lance une erreur si filePath n'est pas une chaîne de caractères.
   */
  constructor(filePath) {
    if (typeof filePath !== "string") {
      throw new Error(
        "Le chemin du fichier d'archive doit être une chaîne de caractères commençant par './'. /! l'extension du fichier n'est pas à renseigner"
      );
    }
    this.path = filePath + ".txt";
  }

  /**
   * inscrit les données rentrés en paramètre dans l'archive.
   * @param {...(string|number|boolean)} data - Les données à archiver. Peuvent être des chaînes de caractères, des nombres ou des booléens.
   */
  log() {
    const date = new Date();
    const year = date.getFullYear().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    const formattedDate = `${year}.${month}.${day}-${hour}:${minute}:${second} ~> `;
    const validArguments = Array.from(arguments).map((arg) => {
      if (
        typeof arg === "string" ||
        typeof arg === "number" ||
        typeof arg === "boolean"
      ) {
        return arg.toString();
      } else {
        return "INVALID ARGUMENT";
      }
    });
    const dataString = validArguments.join(" ");
    const logString = formattedDate + dataString;
    const file = fs.openSync(this.path, "a");
    dataString && fs.writeFileSync(file, logString + "\n");
    fs.closeSync(file);
  }

  /**
   * Affiche le contenu de l'archive dans la console, en affichant les dernières lignes.
   * @param {number} numberOfLines - Le nombre de lignes à afficher à partir de la fin de l'archive.
   * @throws {Error} Lance une erreur si numberOfLines n'est pas un nombre.
   * @throws {Error} Lance une erreur si numberOfLines n'est pas supérieur à 0.
   */
  printToConsole(numberOfLines) {
    if (typeof numberOfLines !== "number" || isNaN(numberOfLines)) {
      throw new Error("Le paramètre doit être un nombre");
    }

    if (numberOfLines <= 0) {
      console.log("Le nombre de lignes doit être supérieur à zéro.");
      throw new Error("Le paramètre doit être supérieur à 0");
    }

    const lines = [];
    const fileContent = fs.readFileSync(this.path, "utf8");
    const fileLines = fileContent.split("\n");
    const startIndex = Math.max(fileLines.length - numberOfLines, 0);

    console.log(
      `Archiver.printToConsole ~> contenu de l'archive "${this.path}.txt" :`
    );
    for (let i = startIndex; i < fileLines.length; i++) {
      console.log(">", fileLines[i]);
    }
  }

  /**
   * Efface le contenu du fichier d'archive ou un nombre spécifié de lignes depuis le début du fichier.
   * @param {number} [numberOfLines] - Le nombre de lignes à effacer depuis le début du fichier. Si non spécifié, efface tout le contenu du fichier.
   * @throws {Error} Lance une erreur si numberOfLines n'est pas un nombre.
   * @throws {Error} Lance une erreur si numberOfLines n'est pas supérieur ou égal à 0.
   */
  clear(numberOfLines) {
    if (numberOfLines === undefined) {
      fs.writeFileSync(this.path, "");
      console.log(
        `Archiver.clear ~> contenu de l'archive "${this.path}" effacé.`
      );
      return `contenu de l'archive "${this.path}" effacé.`;
    } else {
      if (
        typeof numberOfLines !== "number" ||
        isNaN(numberOfLines) ||
        numberOfLines < 0
      ) {
        console.log(
          `Archiver.clear ~> tentative de suppression dans "${this.path}" echoué`
        );
        return `tentative de suppression dans "${this.path}" echoué`;
      }
      const fileContent = fs.readFileSync(this.path, "utf8");
      const fileLines = fileContent.split("\n");
      const linesToKeep = fileLines.slice(numberOfLines);
      const updatedContent = linesToKeep.join("\n");
      fs.writeFileSync(this.path, updatedContent);
      console.log(
        `Archiver.clear ~> ${numberOfLines} ligne(s) de l'archive "${this.path}" ont été effacées.`
      );
      return `${numberOfLines} ligne(s) de l'archive "${this.path}" ont été effacées.`;
    }
  }
}

module.exports = Archiver;
