//Code React element here
const title = React.createElement('h1', {}, "An Awesome Person");
const tagline = React.createElement('p', {}, "Who is learning React");

const int1 = React.createElement('li', {}, "JavaScript");
const int2 = React.createElement('li', {}, "React");
const int3 = React.createElement('li', {}, "Movies");
const int4 = React.createElement('li', {}, "Ice cream");

const interests = React.createElement('ul', {}, [int1, int2, int3, int4]);

const meInReact = React.createElement('div', { className: "me" }, [title, tagline, interests])

ReactDOM.render(container, document.getElementById('main'));
