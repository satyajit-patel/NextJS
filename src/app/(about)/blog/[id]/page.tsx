// http://localhost:3000/blog/2

export default function blog({params}: {params: {id: string}}) { // i.e params will have a "id" which is of string type
    return(
        <div>
            blog number {params.id}
        </div>
    )
}