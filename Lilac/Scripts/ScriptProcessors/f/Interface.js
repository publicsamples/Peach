Content.makeFrontInterface(1024, 768);

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

//Sampler
const var Sampler2 = Synth.getChildSynth("Sampler2");

//Sample Maps
const var sampleMaps2 = Sampler.getSampleMapList();

//Combo
const var cmbSampleMap2 = Content.getComponent("cmbSampleMap2");
cmbSampleMap2.set("items", sampleMaps2.join("\n"));  


inline function oncmbSampleMap2Control(component, value)
{
Sampler2.asSampler().loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("cmbSampleMap2").setControlCallback(oncmbSampleMap2Control);

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
 