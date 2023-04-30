const initialState = {
    task: [{
        a: "abcd"
    },
    {
        b: "bcd"
    }]
}

const reducer = ({ state: initialState, action }) => {
    const onGoing = [];

    switch (action) {

        case task:
            {
                const newData = task.filter((elem) => {
                    return elem !== task.data
                })

              
                onGoing.push(task.data);
            }

        default 
}

}