var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_pasirkaliki_1 = new ol.format.GeoJSON();
var features_pasirkaliki_1 = format_pasirkaliki_1.readFeatures(json_pasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasirkaliki_1.addFeatures(features_pasirkaliki_1);
var lyr_pasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasirkaliki_1, 
                style: style_pasirkaliki_1,
                popuplayertitle: "pasir kaliki",
                interactive: true,
                title: '<img src="styles/legend/pasirkaliki_1.png" /> pasir kaliki'
            });
var format_SUNGAI_LN_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_2 = format_SUNGAI_LN_25K_2.readFeatures(json_SUNGAI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_2.addFeatures(features_SUNGAI_LN_25K_2);
var lyr_SUNGAI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_2, 
                style: style_SUNGAI_LN_25K_2,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_2.png" /> SUNGAI_LN_25K'
            });
var format_JALAN_LN_25K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_3 = format_JALAN_LN_25K_3.readFeatures(json_JALAN_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_3.addFeatures(features_JALAN_LN_25K_3);
var lyr_JALAN_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_3, 
                style: style_JALAN_LN_25K_3,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_3.png" /> JALAN_LN_25K'
            });
var format_Bufferingvector_4 = new ol.format.GeoJSON();
var features_Bufferingvector_4 = format_Bufferingvector_4.readFeatures(json_Bufferingvector_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bufferingvector_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bufferingvector_4.addFeatures(features_Bufferingvector_4);
var lyr_Bufferingvector_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bufferingvector_4, 
                style: style_Bufferingvector_4,
                popuplayertitle: "Buffering vector",
                interactive: true,
                title: '<img src="styles/legend/Bufferingvector_4.png" /> Buffering vector'
            });
var format_titikperindukan_5 = new ol.format.GeoJSON();
var features_titikperindukan_5 = format_titikperindukan_5.readFeatures(json_titikperindukan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikperindukan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikperindukan_5.addFeatures(features_titikperindukan_5);
var lyr_titikperindukan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titikperindukan_5, 
                style: style_titikperindukan_5,
                popuplayertitle: "titik perindukan ",
                interactive: true,
                title: 'titik perindukan '
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_pasirkaliki_1.setVisible(true);lyr_SUNGAI_LN_25K_2.setVisible(true);lyr_JALAN_LN_25K_3.setVisible(true);lyr_Bufferingvector_4.setVisible(true);lyr_titikperindukan_5.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_pasirkaliki_1,lyr_SUNGAI_LN_25K_2,lyr_JALAN_LN_25K_3,lyr_Bufferingvector_4,lyr_titikperindukan_5];
lyr_pasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_SUNGAI_LN_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_25K_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Bufferingvector_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_titikperindukan_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', });
lyr_pasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_SUNGAI_LN_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_25K_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Bufferingvector_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_titikperindukan_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descriptio': '', 'altitudeMo': '', });
lyr_pasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_SUNGAI_LN_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Bufferingvector_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_titikperindukan_5.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descriptio': 'no label', 'altitudeMo': 'no label', });
lyr_titikperindukan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});