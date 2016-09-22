const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster= React.createClass({
  render(){
    const header= React.createElement('p', {}, "Two grannies having the time of their life!")
    const passengers= React.createElement('p', {}, "Passengers:")
    const list = React.createElement('ul', {}, [
      React.createElement('li', {}, "Agnes"),
      React.createElement('li', {}, "Muriel")
    ])
  return React.createElement('div', {className: "oldercoaster"},[header, passengers, list])
}
})

class InFrontOfYou extends React.Component {
  render(){
    const p1= React.createElement('p', {}, "You shouldn't look too far.")
    const p2= React.createElement('p', {},
    ["Sometimes, the solution is ",
    React.createElement('strong',{}, "right in front of you.")
  ])
    return React.createElement('div', {}, [p1, p2])
  }
}

class ButcherShop extends React.Component {
  render(){

    const p = React.createElement('p', {}, "Hello! We have the following products for sale today:")
    const list = React.createElement('ul', {},
      [
        BUTCHER_PRODUCTS.map(function(product){
        return React.createElement('li', {}, product)
      })
      // React.createElement('li', {}, "Tenderloin"),
      // React.createElement('li', {}, "Short Ribs"),
      // React.createElement('li', {}, "Beef shin"),
      // React.createElement('li', {}, "Ribey"),

      ])

    return React.createElement('div', {className: "butcher-shop"}, [p, list])
  }
}





ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
