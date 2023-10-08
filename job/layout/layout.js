



export default function Layout({children}){
    return(<section className="vh-100" >
    <div className="container  h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card rounded-3" >
          {children}
          </div></div></div></div></section>)
}