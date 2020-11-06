import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import Card from "../Card/Card";
import fetch from "isomorphic-fetch";

const Main = () => {
  let [articulos, setArticulos] = useState();

  useEffect(() => {
    fetch("https://api-test-ln.herokuapp.com/articles")
      .then((response) => response.json())
      .then((data) => setArticulos(data));
  }, []);

  if (!articulos) {
    console.log("no hay articulos");
    return null;
  }

  const arrayFiltrado = articulos.articles.filter((elemento) => {
    return +elemento.subtype === 7;
  });

  const arrayCortado = arrayFiltrado.slice(0, 10);

  const tags = [];

  arrayCortado.forEach((elemento) => {
    tags.push(...elemento.taxonomy.tags);
  });

  const tagsAgrupados = tags.reduce((acc, elemento) => {
    const tagExistente = acc[elemento.text];
    if (tagExistente) {
      return {
        ...acc,
        [elemento.text]: { ...elemento, count: tagExistente.count + 1 },
      };
    }
    return {
      ...acc,
      [elemento.text]: { ...elemento, count: 0 },
    };
  }, {});

  const tagsOrdenados = Object.values(tagsAgrupados).sort(
    (a, b) => b.count - a.count
  );

  const tagsCortados = tagsOrdenados.slice(0, 10);

  console.log(arrayCortado);

  return (
    <div>
      <h1>Acumulado grillas</h1>
      <ul className={styles.contenidoLista}>
        {tagsCortados.map((elemento) => {
          return (
            <li key={elemento.slug}>
              <a href={"/tema/" + elemento.slug}>{elemento.text}</a>
            </li>
          );
        })}
      </ul>
      <div className={styles.contenidoArticulos}>
        {arrayCortado.map((elemento) => {
          return <Card key={elemento._id} articulo={elemento}></Card>;
        })}
      </div>
    </div>
  );
};

export default Main;
