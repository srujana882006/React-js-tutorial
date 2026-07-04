
import Section1 from "./components/section1/Section1"
import Section2 from "./components/section2/Section2"


const App = () => {
  const array=[
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvm6EJB-uKzVZAxKKEYb831K5drwBSJ8bDO4pIWKxzstYXTYMdgUH4IQO&s=10',
    binfo:'hii'
    },
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvm6EJB-uKzVZAxKKEYb831K5drwBSJ8bDO4pIWKxzstYXTYMdgUH4IQO&s=10',
    binfo:'hii'
    },
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvm6EJB-uKzVZAxKKEYb831K5drwBSJ8bDO4pIWKxzstYXTYMdgUH4IQO&s=10',
    binfo:'hii'
    },
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvm6EJB-uKzVZAxKKEYb831K5drwBSJ8bDO4pIWKxzstYXTYMdgUH4IQO&s=10',
    binfo:'hii'
    },
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvm6EJB-uKzVZAxKKEYb831K5drwBSJ8bDO4pIWKxzstYXTYMdgUH4IQO&s=10',
    binfo:'hii'
    },
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvm6EJB-uKzVZAxKKEYb831K5drwBSJ8bDO4pIWKxzstYXTYMdgUH4IQO&s=10',
    binfo:'hii'
    }
  ]
  return (
    <div>
      <Section1 />
     <Section2 array={array}/>
    </div>
  );

}


export default App