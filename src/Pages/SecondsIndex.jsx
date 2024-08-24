import React from 'react'
import { useState, useEffect } from 'react';

// COMPONENTS
import Foods from '../Components/Foods/Foods.jsx';

export default function SecondsIndex() {

  return (
    <div>
      <Foods
        listHeader={"Your Seconds"}
        limit={0}
        onlySeconds={true}
      />
    </div>
  )
}
