export let renderViewStaff = (newTest) => {
    let content = "";
    newTest.forEach((item) => {
        content = `
        <table class='table'>
            <thead>
                <tr>
                    <td>Text</td>
                    <td>Image</td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>${item.text}</td>
                    <td>
                    <img style="width:50px;" src="${item.img}" alt="" />
                    </td>
                </tr>
            </tbody>
        </table>
    `;
    });

    document.getElementById("staff-content").innerHTML = content;
};
