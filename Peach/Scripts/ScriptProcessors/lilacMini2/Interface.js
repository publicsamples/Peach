Content.makeFrontInterface(335, 750);

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
 