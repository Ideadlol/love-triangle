/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;  
  var lv_triangles_col = 0;
  var len = preferences.length;

  for(let i = 0; i < len; i++) { 

    var f_lvr = preferences[i];
    var s_lvr = preferences[f_lvr - 1];
    var t_lvr = preferences[s_lvr - 1];

    if(t_lvr == i + 1) {
      lv_triangles_col++;
    }

    if (lv_triangles_col == 3) {
      count++;
      lv_triangles_col = 0;
    }
  }

  return(count);
};