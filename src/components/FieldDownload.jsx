import React from 'react'
import foodeventpdf from '../../static/fields/foodevent_reference.pdf'

const pdfDownloadMap: Object = Object.freeze({
  'foodevent': foodeventpdf,
  'foodenforcement': 'food/enforcement',
  'drugevent': 'drug/event',
  'druglabel': 'drug/label',
  'drugenforcement': 'drug/enforcement',
  'deviceevent': 'device/event',
  'devicerecall': 'device/recall',
  'deviceclass': 'device/classification',
  'devicereglist': 'device/registrationlisting',
  'deviceclearance': 'device/510k',
  'devicepma': 'device/pma',
  'deviceudi': 'device/udi',
  'deviceenforcement': 'device/enforcement'
})

const xlsxDownloadMap: Object = Object.freeze({
  'foodevent': '/fields/foodevent_reference.xlsx',
  'foodenforcement': '/fields/foodenforcement_reference.xlsx',
  'drugevent': '/fields/drugevent_reference.xlsx',
  'druglabel': '/fields/druglabel_reference.xlsx',
  'drugenforcement': '/fields/drugenforcement_reference.xlsx',
  'deviceevent': '/fields/deviceevent_reference.xlsx',
  'devicerecall': '/fields/devicerecall_reference.xlsx',
  'deviceclass': '/fields/deviceclass_reference.xlsx',
  'devicereglist': '/fields/devicereglist_reference.xlsx',
  'deviceclearance': '/fields/deviceclearance_reference.xlsx',
  'devicepma': '/fields/devicepma_reference.xlsx',
  'deviceudi': '/fields/deviceudi_reference.xlsx',
  'deviceenforcement': '/fields/deviceenforcement_reference.xlsx'
})

const yamlDownloadMap: Object = Object.freeze({
  'foodevent': '/fields/foodevent.yaml',
  'foodenforcement': '/fields/foodenforcement.yaml',
  'drugevent': '/fields/drugevent.yaml',
  'druglabel': '/fields/druglabel.yaml',
  'drugenforcement': '/fields/drugenforcement.yaml',
  'deviceevent': '/fields/deviceevent.yaml',
  'devicerecall': '/fields/devicerecall.yaml',
  'deviceclass': '/fields/deviceclass.yaml',
  'devicereglist': '/fields/devicereglist.yaml',
  'deviceclearance': '/fields/deviceclearance.yaml',
  'devicepma': '/fields/devicepma.yaml',
  'deviceudi': '/fields/deviceudi.yaml',
  'deviceenforcement': '/fields/deviceenforcement.yaml'
})


const FieldDownload = (props: tPROPS) => {
  const {
    // key basically. can't pass key as prop
    k,
    meta
  } = props

  return (
    <section className="marg-t-2" key={k}>
      <button className="button bg-primary">
        <a href={pdfDownloadMap[meta.status]} className="clr-white weight-700" download="fields.pdf">
          <fa className="fa fa-file-pdf-o fa-lg marg-r-1" />Download PDF
        </a>
      </button>
      <button className="button bg-primary marg-l-2">
        <a href={xlsxDownloadMap[meta.status]} className="clr-white weight-700" download="fields.xlsx">
          <fa className="fa fa-file-excel-o fa-lg marg-r-1" />Download XLSX
        </a>
      </button>
      <button className="button bg-primary marg-l-2">
        <a href={yamlDownloadMap[meta.status]} className="clr-white weight-700" download="fields.yaml">
          <fa className="fa fa-file-code-o fa-lg marg-r-1" />Download YAML
        </a>
      </button>
    </section>
  )
}


FieldDownload.displayName = 'components/FieldDownload'
export default FieldDownload