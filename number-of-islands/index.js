module.exports = function (grid){
   	let count = 0;
	
	for(let row=0; row<grid.length; row++){
		for(let col=0; col<grid[row].length; col++){
			if(grid[row][col] == '1'){
				//at least one island fount add 1 to counter
				count += 1;
				callBFS(grid, row, col);
			}
		}
	}
	return count;
}

function callBFS(grid, row, col){
	if(row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] == '0')
		return 
	grid[row][col] = '0';
	
	callBFS(grid, row + 1, col); //up
	callBFS(grid, row - 1, col); //down
	callBFS(grid, row, col - 1); //left
	callBFS(grid, row, col + 1); //right
}