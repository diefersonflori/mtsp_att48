var N = 280, E=181;
caminho=[] ;
 caminho = [0,279,1,2,278,3,4,5,6,7,8,9,10,11,12,13,14,23,22,24,21,25,26,27,28,30,29,124,123,122,121,120,118,156,157,158,159,174,160,161,173,172,105,104,103,102,101,100,99,98,97,92,93,94,95,96,91,90,89,88,80,79,78,75,74,73,72,71,70,69,66,65,64,63,62,61,117,116,114,85,84,83,56,43,44,45,46,47,48,37,36,35,34,38,39,40,41,42,33,20,268,267,266,136,137,138,139,140,141,142,143,144,145,146,147,148,149,177,176,175,180,179,178,181,183,184,186,185,188,187,189,190,200,199,198,201,202,203,204,205,206,207,208,209,210,227,226,225,224,223,222,233,232,231,230,237,236,235,234,228,250,249,246,243,240,241,242,244,245,247,248,255,254,251,252,253,256,170,171,169,0];
 var g = { nodes: [] , edges : [] }; 
 node_aux= []; 
node_aux[0]=[-1,288,149];
node_aux[1]=[0,288,129];
node_aux[2]=[0,270,133];
node_aux[3]=[0,256,141];
node_aux[4]=[0,256,157];
node_aux[5]=[0,246,157];
node_aux[6]=[0,236,169];
node_aux[7]=[0,228,169];
node_aux[8]=[0,228,161];
node_aux[9]=[0,220,169];
node_aux[10]=[0,212,169];
node_aux[11]=[0,204,169];
node_aux[12]=[0,196,169];
node_aux[13]=[0,188,169];
node_aux[14]=[0,196,161];
node_aux[15]=[0,188,145];
node_aux[16]=[1,172,145];
node_aux[17]=[1,164,145];
node_aux[18]=[1,156,145];
node_aux[19]=[1,148,145];
node_aux[20]=[1,140,145];
node_aux[21]=[1,148,169];
node_aux[22]=[1,164,169];
node_aux[23]=[1,172,169];
node_aux[24]=[1,156,169];
node_aux[25]=[1,140,169];
node_aux[26]=[1,132,169];
node_aux[27]=[1,124,169];
node_aux[28]=[1,116,161];
node_aux[29]=[1,104,153];
node_aux[30]=[2,104,161];
node_aux[31]=[2,104,169];
node_aux[32]=[2,90,165];
node_aux[33]=[2,80,157];
node_aux[34]=[2,64,157];
node_aux[35]=[2,64,165];
node_aux[36]=[2,56,169];
node_aux[37]=[2,56,161];
node_aux[38]=[2,56,153];
node_aux[39]=[2,56,145];
node_aux[40]=[2,56,137];
node_aux[41]=[2,56,129];
node_aux[42]=[2,56,121];
node_aux[43]=[2,40,121];
node_aux[44]=[2,40,129];
node_aux[45]=[2,40,137];
node_aux[46]=[3,40,145];
node_aux[47]=[3,40,153];
node_aux[48]=[3,40,161];
node_aux[49]=[3,40,169];
node_aux[50]=[3,32,169];
node_aux[51]=[3,32,161];
node_aux[52]=[3,32,153];
node_aux[53]=[3,32,145];
node_aux[54]=[3,32,137];
node_aux[55]=[3,32,129];
node_aux[56]=[3,32,121];
node_aux[57]=[4,32,113];
node_aux[58]=[4,40,113];
node_aux[59]=[4,56,113];
node_aux[60]=[4,56,105];
node_aux[61]=[4,48,99];
node_aux[62]=[4,40,99];
node_aux[63]=[4,32,97];
node_aux[64]=[4,32,89];
node_aux[65]=[4,24,89];
node_aux[66]=[4,16,97];
node_aux[67]=[4,16,109];
node_aux[68]=[4,8,109];
node_aux[69]=[4,8,97];
node_aux[70]=[4,8,89];
node_aux[71]=[4,8,81];
node_aux[72]=[4,8,73];
node_aux[73]=[4,8,65];
node_aux[74]=[4,8,57];
node_aux[75]=[4,16,57];
node_aux[76]=[5,8,49];
node_aux[77]=[5,8,41];
node_aux[78]=[5,24,45];
node_aux[79]=[5,32,41];
node_aux[80]=[5,32,49];
node_aux[81]=[5,32,57];
node_aux[82]=[5,32,65];
node_aux[83]=[5,32,73];
node_aux[84]=[5,32,81];
node_aux[85]=[5,40,83];
node_aux[86]=[5,40,73];
node_aux[87]=[5,40,63];
node_aux[88]=[5,40,51];
node_aux[89]=[5,44,43];
node_aux[90]=[5,44,35];
node_aux[91]=[6,44,27];
node_aux[92]=[6,32,25];
node_aux[93]=[6,24,25];
node_aux[94]=[6,16,25];
node_aux[95]=[6,16,17];
node_aux[96]=[6,24,17];
node_aux[97]=[6,32,17];
node_aux[98]=[6,44,11];
node_aux[99]=[6,56,9];
node_aux[100]=[6,56,17];
node_aux[101]=[6,56,25];
node_aux[102]=[6,56,33];
node_aux[103]=[6,56,41];
node_aux[104]=[6,64,41];
node_aux[105]=[6,72,41];
node_aux[106]=[6,72,49];
node_aux[107]=[6,56,49];
node_aux[108]=[6,48,51];
node_aux[109]=[7,56,57];
node_aux[110]=[7,56,65];
node_aux[111]=[7,48,63];
node_aux[112]=[7,48,73];
node_aux[113]=[7,56,73];
node_aux[114]=[7,56,81];
node_aux[115]=[7,48,83];
node_aux[116]=[7,56,89];
node_aux[117]=[7,56,97];
node_aux[118]=[7,104,97];
node_aux[119]=[8,104,105];
node_aux[120]=[8,104,113];
node_aux[121]=[8,104,121];
node_aux[122]=[8,104,129];
node_aux[123]=[8,104,137];
node_aux[124]=[8,104,145];
node_aux[125]=[8,116,145];
node_aux[126]=[8,124,145];
node_aux[127]=[8,132,145];
node_aux[128]=[8,132,137];
node_aux[129]=[8,140,137];
node_aux[130]=[8,148,137];
node_aux[131]=[8,156,137];
node_aux[132]=[8,164,137];
node_aux[133]=[8,172,125];
node_aux[134]=[8,172,117];
node_aux[135]=[8,172,109];
node_aux[136]=[9,172,101];
node_aux[137]=[9,172,93];
node_aux[138]=[9,172,85];
node_aux[139]=[9,180,85];
node_aux[140]=[9,180,77];
node_aux[141]=[9,180,69];
node_aux[142]=[9,180,61];
node_aux[143]=[9,180,53];
node_aux[144]=[9,172,53];
node_aux[145]=[9,172,61];
node_aux[146]=[9,172,69];
node_aux[147]=[9,172,77];
node_aux[148]=[9,164,81];
node_aux[149]=[9,148,85];
node_aux[150]=[9,124,85];
node_aux[151]=[9,124,93];
node_aux[152]=[10,124,109];
node_aux[153]=[10,124,125];
node_aux[154]=[10,124,117];
node_aux[155]=[10,124,101];
node_aux[156]=[10,104,89];
node_aux[157]=[10,104,81];
node_aux[158]=[10,104,73];
node_aux[159]=[10,104,65];
node_aux[160]=[10,104,49];
node_aux[161]=[10,104,41];
node_aux[162]=[10,104,33];
node_aux[163]=[10,104,25];
node_aux[164]=[10,104,17];
node_aux[165]=[10,92,9];
node_aux[166]=[10,80,9];
node_aux[167]=[10,72,9];
node_aux[168]=[11,64,21];
node_aux[169]=[11,72,25];
node_aux[170]=[11,80,25];
node_aux[171]=[11,80,25];
node_aux[172]=[11,80,41];
node_aux[173]=[11,88,49];
node_aux[174]=[11,104,57];
node_aux[175]=[11,124,69];
node_aux[176]=[12,124,77];
node_aux[177]=[12,132,81];
node_aux[178]=[12,140,65];
node_aux[179]=[12,132,61];
node_aux[180]=[12,124,61];
node_aux[181]=[12,124,53];
node_aux[182]=[12,124,45];
node_aux[183]=[13,124,37];
node_aux[184]=[13,124,29];
node_aux[185]=[13,132,21];
node_aux[186]=[13,124,21];
node_aux[187]=[13,120,9];
node_aux[188]=[13,128,9];
node_aux[189]=[13,136,9];
node_aux[190]=[13,148,9];
node_aux[191]=[13,162,9];
node_aux[192]=[13,156,25];
node_aux[193]=[13,172,21];
node_aux[194]=[13,180,21];
node_aux[195]=[13,180,29];
node_aux[196]=[13,172,29];
node_aux[197]=[13,172,37];
node_aux[198]=[14,172,45];
node_aux[199]=[14,180,45];
node_aux[200]=[14,180,37];
node_aux[201]=[14,188,41];
node_aux[202]=[14,196,49];
node_aux[203]=[14,204,57];
node_aux[204]=[14,212,65];
node_aux[205]=[14,220,73];
node_aux[206]=[14,228,69];
node_aux[207]=[14,228,77];
node_aux[208]=[14,236,77];
node_aux[209]=[14,236,69];
node_aux[210]=[14,236,61];
node_aux[211]=[14,228,61];
node_aux[212]=[14,228,53];
node_aux[213]=[14,236,53];
node_aux[214]=[14,236,45];
node_aux[215]=[14,228,45];
node_aux[216]=[14,228,37];
node_aux[217]=[14,236,37];
node_aux[218]=[14,236,29];
node_aux[219]=[14,228,29];
node_aux[220]=[14,228,21];
node_aux[221]=[14,236,21];
node_aux[222]=[15,252,21];
node_aux[223]=[15,260,29];
node_aux[224]=[15,260,37];
node_aux[225]=[15,260,45];
node_aux[226]=[15,260,53];
node_aux[227]=[15,260,61];
node_aux[228]=[15,260,69];
node_aux[229]=[15,260,77];
node_aux[230]=[16,276,77];
node_aux[231]=[16,276,69];
node_aux[232]=[16,276,61];
node_aux[233]=[16,276,53];
node_aux[234]=[16,284,53];
node_aux[235]=[16,284,61];
node_aux[236]=[16,284,69];
node_aux[237]=[16,284,77];
node_aux[238]=[16,284,85];
node_aux[239]=[16,284,93];
node_aux[240]=[16,284,101];
node_aux[241]=[17,288,109];
node_aux[242]=[17,280,109];
node_aux[243]=[17,276,101];
node_aux[244]=[17,276,93];
node_aux[245]=[17,276,85];
node_aux[246]=[17,268,97];
node_aux[247]=[17,260,109];
node_aux[248]=[17,252,101];
node_aux[249]=[17,260,93];
node_aux[250]=[17,260,85];
node_aux[251]=[17,236,85];
node_aux[252]=[17,228,85];
node_aux[253]=[17,228,93];
node_aux[254]=[18,236,93];
node_aux[255]=[18,236,101];
node_aux[256]=[18,228,101];
node_aux[257]=[18,228,109];
node_aux[258]=[18,228,117];
node_aux[259]=[18,228,125];
node_aux[260]=[18,220,125];
node_aux[261]=[18,212,117];
node_aux[262]=[18,204,109];
node_aux[263]=[18,196,101];
node_aux[264]=[18,188,93];
node_aux[265]=[18,180,93];
node_aux[266]=[18,180,101];
node_aux[267]=[18,180,109];
node_aux[268]=[18,180,117];
node_aux[269]=[19,180,125];
node_aux[270]=[19,196,145];
node_aux[271]=[19,204,145];
node_aux[272]=[19,212,145];
node_aux[273]=[19,220,145];
node_aux[274]=[19,228,145];
node_aux[275]=[19,236,145];
node_aux[276]=[19,246,141];
node_aux[277]=[19,252,125];
node_aux[278]=[19,260,129];
node_aux[279]=[19,280,133];
