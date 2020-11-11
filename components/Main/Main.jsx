import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import Card from "../Card/Card";
import fetch from "isomorphic-fetch";

const Main = () => {
  const [articulos, setArticulos] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Traemos los datos de la api
    fetch("https://api-test-ln.herokuapp.com/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticulos(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("el error que se a obserbado es : " + error);
      });
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  //Chequeamos
  if (articulos.length === 0) {
    return <h1>No hay articulos</h1>;
  }

  //Mostramos los que cuentan con el "subtype":"7",
  const arrayFiltrado = articulos.filter((elemento) => {
    return elemento.subtype === "7";
  });

  //cortamos el array y que muestre 10 elementos
  const arrayCortado = arrayFiltrado.slice(0, 10);

  const tags = [];

  //sacamos los tags de cada articulo recorriendo el array cortado
  arrayCortado.forEach((elemento) => {
    tags.push(...elemento.taxonomy.tags);
  });

  console.log(arrayCortado);
  // agrupamos los tags por titulo
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
      [elemento.text]: { ...elemento, count: 1 },
    };
  }, {});
  console.log(tagsAgrupados);

  //ordenamos el array
  const tagsOrdenados = Object.values(tagsAgrupados).sort(
    (a, b) => b.count - a.count
  );

  //cortamos el array
  const tagsCortados = tagsOrdenados.slice(0, 10);

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
