const members = [];
function addMember (member){
   members.push(member);
}
function removeMember(member){
    if(members.indexOf(member)>-1){
        const index=members.indexOf(member);
        members.splice(index, 1);
    }
}
addMember ('Emma');
addMember ('Okey');
addMember ('Chima');
addMember ('Kanayo');
console.log(members);
removeMember('Okey');
console.log(members);