const products = [
    {
        id: "1",
        stock: 10,
        name: "nike air force",
        price: 1200,
        category: "shoes", 
        description: "lorem",
        img: "https://celadasa.vtexassets.com/arquivos/ids/212085-800-auto?v=637927944627300000&width=800&height=auto&aspect=true" 

    },
    {
        id: "2",
        stock: 10,
        name: "nike air max",
        price: 800,
        category: "shoes",
        description: "lorem",
        img:"https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw61df8d44/images/58553701/Rebel_58553701_blackwhite_hi-res.jpg?sw=750&sh=750&sm=fit&q=60"
        
    },
    {

        id: "3",
        stock: 10,
        name: "nike shirt",
        price: 370,
        category: "shirt",
        description: "lorem",
        img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQI1gGIym5hls9eU_63LIThHpfckdrcNTDzM5Oi4dXVYt8UedzuFwStmzAhl9qDB232zpQdHqxGCAh1xqz9UlfM6G4LE8bw2Q"
    },
    {
        id: "4",
        name: "nike short",
        price: 300,
        stock: 10,
        category: "short",
        description: "lorem",
        img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaNV5MMA6z6KMwRyTy2mszIDYy85ib1fLILdcjn9mZis63wwGMxW1q4-kVsVBVcJrJK7OwwxbmdyqoOfF0ErrjN7QWTOcWdd97P8C5GCbMKYH9HEliZub2"
    },
    {
        id: "5",
        name: "nike hoodie",
        price: 900,
        stock: 10,
        description: "lorem",
        category: "hoodie",
        img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6o93C4Un2JFyFO_Y6G4YJcol76-CthfUATn35bRYOcZSeFSOmF_KbBrsUgUEilgd8zhuZxsuhwbX090egKRNZ216vbzrawZ2yStt1D7M"
    },
    {
        id: "6",
        name: "nike shirt",
        stock: 10,
        price: 370,
        category: "shirt",
        description: "lorem",
        img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQI1gGIym5hls9eU_63LIThHpfckdrcNTDzM5Oi4dXVYt8UedzuFwStmzAhl9qDB232zpQdHqxGCAh1xqz9UlfM6G4LE8bw2Q"
    },
    {
        id: "7",
        name: "nike short",
        price: 300,
        stock: 10,
        category: "short",
        description: "lorem",
        img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaNV5MMA6z6KMwRyTy2mszIDYy85ib1fLILdcjn9mZis63wwGMxW1q4-kVsVBVcJrJK7OwwxbmdyqoOfF0ErrjN7QWTOcWdd97P8C5GCbMKYH9HEliZub2"
    },
    {
        id: "8",
        stock: 10,
        name: "nike hoodie",
        price: 900,
        description: "lorem",
        category: "hoodie",
        img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6o93C4Un2JFyFO_Y6G4YJcol76-CthfUATn35bRYOcZSeFSOmF_KbBrsUgUEilgd8zhuZxsuhwbX090egKRNZ216vbzrawZ2yStt1D7M"
    },


];

export const getProducts = () => {
    return new Promise(res =>{
        setTimeout(() => {
            res(products)
        }, 2000)
    }) 
}

export const getProduct = (idItem) =>{
return new Promise(resolve => {
    setTimeout(() => {
        const product = products.find(prod => prod.id === idItem);
        resolve(product);
    }, 2000)
})
}

export const getProductsByCategory = (idCategory) => {
return new Promise(resolve => {
    setTimeout(() => {
        const productsCategory = products.filter(prod => prod.category === idCategory)
        resolve(productsCategory);
    }, 2000)
})
}