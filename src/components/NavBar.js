const NavBar = ({countriesArray}) => {
    return ( 
        <div className="text-center py-10 mb-4 bg-slate-100 shadow-md">
            <h1 className="text-5xl font-bold text-orange-300 mb-4">World Countries Data</h1>
            <p className="text-2xl font-bold text-slate-600 mb-4">Currently, we have <span className="text-blue-700">{countriesArray.length}</span> countries</p>
            <p className="text-xl  text-slate-800 mb-4">After you type in the search box click outside it to get the results</p>
        </div>
     );
}
 
export default NavBar;