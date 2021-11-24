Object.entries(partAtts).map(attribute => {
  return <tr className="contrast mono" key={attribute[0]}>
          <td>{attribute[0]}:</td>
          <td>{attribute[1]}</td>
        </tr>
  })
