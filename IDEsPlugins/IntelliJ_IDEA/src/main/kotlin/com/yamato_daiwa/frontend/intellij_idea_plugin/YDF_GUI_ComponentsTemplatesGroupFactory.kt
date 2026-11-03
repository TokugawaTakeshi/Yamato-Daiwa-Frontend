package com.yamato_daiwa.frontend.intellij_idea_plugin

import com.intellij.icons.AllIcons
import com.intellij.ide.fileTemplates.FileTemplateDescriptor
import com.intellij.ide.fileTemplates.FileTemplateGroupDescriptor
import com.intellij.ide.fileTemplates.FileTemplateGroupDescriptorFactory


class YDF_GUI_ComponentsTemplatesGroupFactory : FileTemplateGroupDescriptorFactory {

  override fun getFileTemplatesDescriptor(): FileTemplateGroupDescriptor {

    val groupDescriptor = FileTemplateGroupDescriptor("YDF GUI Components", AllIcons.Nodes.Folder)

    /* [ Theory ] No ".ft" must be here. */
    groupDescriptor.addTemplate(FileTemplateDescriptor("AdmonitionBlock.styl"))
    groupDescriptor.addTemplate(FileTemplateDescriptor("Badge.styl"))

    return groupDescriptor

  }

}
