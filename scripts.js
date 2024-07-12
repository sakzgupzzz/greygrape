function toggleSubfolders(id) {
    const subfolderList = document.getElementById(id);
    const arrow = subfolderList.previousElementSibling.querySelector('.dropdown-arrow');

    if (subfolderList.style.display === 'none' || subfolderList.style.display === '') {
        subfolderList.style.display = 'block';
        arrow.textContent = '▼';
    } else {
        subfolderList.style.display = 'none';
        arrow.textContent = '▶';
    }
}

// Initial setup to ensure all subfolder and textfile lists are hidden
document.addEventListener('DOMContentLoaded', () => {
    const subfolderLists = document.querySelectorAll('.subfolder-list, .textfile-list');
    subfolderLists.forEach(subfolderList => {
        subfolderList.style.display = 'none';
    });
});

function showContent(fileName) {
    const fileContent = {
        'example-project-subfolder1-file1': `
            <h2>Example Project - Subfolder 1 - File 1</h2>
            <p>
                This is an example content for File 1 in Subfolder 1 of the Example Project. Here is some detailed content:
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus nec lorem facilisis consequat. 
                Curabitur scelerisque, purus non consequat volutpat, urna orci tincidunt purus, eget consequat enim erat id risus. 
                Sed euismod, est non feugiat aliquam, magna erat fermentum dolor, eget tincidunt metus magna eu massa. 
                Phasellus vel ligula at leo bibendum malesuada et a libero. Aenean sed convallis justo. 
                Quisque eget dignissim lorem. Sed aliquet, justo vel tincidunt tempus, lorem elit sollicitudin urna, 
                in suscipit erat velit non turpis. Pellentesque vel vestibulum erat.
            </p>
            <p>
                Donec vulputate ipsum nec nunc fermentum, nec tempor lectus pretium. Morbi consectetur mi nec nunc vulputate, 
                at dictum tortor hendrerit. Integer fermentum libero at felis facilisis, a luctus mi facilisis. Aliquam erat volutpat. 
                Nulla facilisi. Ut non justo libero. Suspendisse nec sem id nisi fermentum dictum. 
                Praesent eu nibh vitae augue malesuada fermentum. Aliquam erat volutpat. Curabitur egestas eu nunc eget luctus.
            </p>
            <p>
                Phasellus dictum leo ac magna fermentum, at consequat ligula porttitor. Nulla facilisi. 
                Sed aliquam, tortor ut venenatis dignissim, risus libero sollicitudin ipsum, non pretium libero odio ac odio. 
                Morbi tincidunt, nunc nec posuere gravida, sem felis cursus urna, ac tristique est dolor et tortor.
            </p>`,
        'example-project-subfolder1-file2': 'Content of Example Project - Subfolder 1 - File 2',
        'example-project-subfolder2-file1': 'Content of Example Project - Subfolder 2 - File 1',
        'example-project-subfolder2-file2': 'Content of Example Project - Subfolder 2 - File 2',
        'rnaseq-subfolder1-file1': 'Content of RNAseq - Day 1 - File 1',
        'rnaseq-subfolder1-file2': 'Content of RNAseq - Day 1 - File 2',
        'rnaseq-subfolder2-file1': 'Content of RNAseq - Day 2 - File 1',
        'rnaseq-subfolder2-file2': 'Content of RNAseq - Day 2 - File 2',
        'rnaseq-subfolder3-file1': 'Content of RNAseq - Day 3 - File 1',
        'rnaseq-subfolder3-file2': 'Content of RNAseq - Day 3 - File 2',
        'hyprseq-subfolder1-file1': 'Content of HyPRseq - Experiment A - File 1',
        'hyprseq-subfolder1-file2': 'Content of HyPRseq - Experiment A - File 2',
        'hyprseq-subfolder2-file1': 'Content of HyPRseq - Experiment B - File 1',
        'hyprseq-subfolder2-file2': 'Content of HyPRseq - Experiment B - File 2',
        'hairpin-fluorophores-subfolder1-file1': 'Content of Hairpin conjugated fluorophores - Analysis 1 - File 1',
        'hairpin-fluorophores-subfolder1-file2': 'Content of Hairpin conjugated fluorophores - Analysis 1 - File 2',
        'hairpin-fluorophores-subfolder2-file1': 'Content of Hairpin conjugated fluorophores - Analysis 2 - File 1',
        'hairpin-fluorophores-subfolder2-file2': 'Content of Hairpin conjugated fluorophores - Analysis 2 - File 2',
        '3t3-cells-subfolder1-file1': 'Content of 3T3 cells - Growth - File 1',
        '3t3-cells-subfolder1-file2': 'Content of 3T3 cells - Growth - File 2',
        '3t3-cells-subfolder2-file1': 'Content of 3T3 cells - Treatment - File 1',
        '3t3-cells-subfolder2-file2': 'Content of 3T3 cells - Treatment - File 2',
        'hcr-3-subfolder1-file1': 'Content of HCR 3.0 - Setup - File 1',
        'hcr-3-subfolder1-file2': 'Content of HCR 3.0 - Setup - File 2',
        'hcr-3-subfolder2-file1': 'Content of HCR 3.0 - Results - File 1',
        'hcr-3-subfolder2-file2': 'Content of HCR 3.0 - Results - File 2'
    };

    document.getElementById('file-content').innerHTML = fileContent[fileName] || 'Content not found';
}
