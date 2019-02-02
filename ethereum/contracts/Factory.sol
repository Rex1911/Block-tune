pragma solidity 0.4.25;

contract Factory{
    mapping(uint=>address) public songMapping;
    function createSong(string _title, string _artistName, address[] _contributers,uint[] _cut, uint id) public{
        address new_song = new Song(msg.sender, _title, _artistName, _contributers, _cut);
        songMapping[id] = new_song;
    }
}

contract Song {
    struct Contributers {
        address adr;
        uint cut;
    }
    
    address public owner;
    mapping (address => bool) hasPurchased;
    string public title;
    string public artistName;
    Contributers[] public c;
    
    constructor(address _owner,string _title, string _artistName, address[] _contributers,uint[] _cut) public {
        owner = _owner;
        title = _title;
        artistName = _artistName;
        for(uint i = 0; i < _contributers.length; i++) {
            Contributers memory temp;
            temp.adr = _contributers[i];
            temp.cut = _cut[i];
            c.push(temp);
        }
    }
    
    function purchase() public payable {
        require(hasPurchased[msg.sender] == false);
        hasPurchased[msg.sender] = true;
        for(uint i = 0; i < c.length; i++){
            c[i].adr.transfer(msg.value*c[i].cut/100);
        }
    }
}