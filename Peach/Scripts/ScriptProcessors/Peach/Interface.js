Content.makeFrontInterface(750, 730);

//Sampler
const var Sampler1 = Synth.getChildSynth("Sampler1");

//Sample Maps
const var sampleMaps = Sampler.getSampleMapList();

//Combo
const var cmbSampleMap = Content.getComponent("cmbSampleMap");
cmbSampleMap.set("items", sampleMaps.join("\n"));  


inline function oncmbSampleMapControl(component, value)
{
Sampler1.asSampler().loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("cmbSampleMap").setControlCallback(oncmbSampleMapControl);

const var presets = Content.getComponent("presets");

const var presetspage = Content.getComponent("presetspage");


inline function onpresetsControl(component, value)
{
   	  presetspage.showControl(value);
      presetspage.showControl(1-value); 
};

Content.getComponent("presets").setControlCallback(onpresetsControl);



function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 